/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Register Session
     * @returns any Successful Response
     * @throws ApiError
     */
    public static registerSessionApiV1SessionPut(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/session',
        });
    }

    /**
     * Get Notifications
     * @param connection
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getNotificationsApiV1NotificationsGet(
        connection: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/notifications',
            headers: {
                'connection': connection,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
