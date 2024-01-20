import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "components/ui/theme";
import AppSessionRoot from "pages/AppSessionRoot";
import NotFoundPage from "pages/NotFoundPage";
import { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk publishable key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const queryClient = new QueryClient();

function ClerkProviderWithNavigation({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      {children}
    </ClerkProvider>
  );
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/app" replace />} />
      <Route
        path="/sign-in/*"
        element={<SignIn redirectUrl="/app" routing="path" path="/sign-in" />}
      />
      <Route
        path="/sign-up/*"
        element={<SignUp redirectUrl="/app" routing="path" path="/sign-up" />}
      />
      <Route
        path="/app/*"
        element={
          <>
            <SignedIn>
              <AppSessionRoot />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn redirectUrl="/app" />
            </SignedOut>
          </>
        }
      />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <CookiesProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ClerkProviderWithNavigation>
              <Router />
            </ClerkProviderWithNavigation>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
