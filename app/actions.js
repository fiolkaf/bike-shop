export const ACTIVATE_MODULE = 'ACTIVATE_MODULE';

export function activateModule(name) {
    return { type: ACTIVATE_MODULE, name };
};

export let __hotReload = true;
