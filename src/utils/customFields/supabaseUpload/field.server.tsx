import type { PayloadServerReactComponent } from "payload";

import React from 'react';

import { SupabaseUploadFieldClient } from './field.client';

export const SupabaseUploadFieldServer: PayloadServerReactComponent<any> = () => {
    return (
        <div>
            <h2>Supabase Upload Field Server</h2>
            <SupabaseUploadFieldClient />
        </div>
    )
}

export default SupabaseUploadFieldServer;
