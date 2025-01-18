export const environment = {
  production: true,
  entorno: "test",
  autenticacion: true,
  notificaciones: false,
  menuApps: false,
  appname: "cumplidos",
  appMenu: "Cumplidos_Proveedores",
  TOKEN: {
    AUTORIZATION_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
    CLIENTE_ID: "WxgYKINkTC6bNx8RmNrTKNDpUa4a",
    RESPONSE_TYPE: "id_token token",
    SCOPE: "openid email role documento",
    REDIRECT_URL: "https://proveedores.portaloas.udistrital.edu.co",
    SIGN_OUT_URL:
      "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
    SIGN_OUT_REDIRECT_URL: "https://proveedores.portaloas.udistrital.edu.co",
    AUTENTICACION_MID:
      "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
  },
  parcels: {
    "@udistrital/root-config": "https://proveedores.portaloas.udistrital.edu.co/udistrital-root-config.js",
    "@udistrital/core-mf":
      "https://coreclientes.portaloas.udistrital.edu.co/main.js",
    "@udistrital/revision-cumplido-prov-mf": "https://revisoncumplidoprov.portaloas.udistrital.edu.co/main.js",
  },
};
