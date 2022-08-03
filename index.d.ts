import React from 'react';
import { ViewProps } from 'react-native';

export const PortalOrigin: React.FunctionComponent<
    {
        destination: string | null;
    } & ViewProps
>;

export const PortalDestination: React.FunctionComponent<
    {
        name: string;
    } & ViewProps
>;
