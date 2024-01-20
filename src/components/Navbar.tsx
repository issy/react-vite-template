import { Button } from "components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "components/ui/navigation-menu";
import { useTheme } from "components/ui/theme";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const navbarConfig: {
  title: string;
  links: { label: string; path: string }[];
} = {
  title: "My App",
  links: [
    {
      label: "Foo",
      path: "/foo",
    },
    {
      label: "Bar",
      path: "/bar",
    },
  ],
} as const;

export default function Navbar() {
  return (
    <NavigationMenu className="sticky top-0 z-10 container p-2 flex max-w-screen-2xl">
      <Link className="flex-1 text-xl" to="/app">
        <Button variant="ghost">{navbarConfig.title}</Button>
      </Link>
      <NavigationMenuList className="flex">
        {navbarConfig.links.map(({ label, path }, index) => (
          <Link
            key={`${label}_${path}_${index}`}
            to={path}
            className={navigationMenuTriggerStyle()}
          >
            <NavigationMenuLink>{label}</NavigationMenuLink>
          </Link>
        ))}
        <Link to="/foo" className={navigationMenuTriggerStyle()}>
          <NavigationMenuLink>Foo</NavigationMenuLink>
        </Link>
        <ThemeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
