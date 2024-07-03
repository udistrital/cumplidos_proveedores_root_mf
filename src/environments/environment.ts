export const environment = {
    production: false,
    entorno: "test",
    autenticacion: true,
    notificaciones: false,
    menuApps: false,
    appname: "cumplidos_proveedores",
    appMenu: "CUMPLIDOS_PROVEEDORES_MF",
    TOKEN: {
      AUTORIZATION_URL: "https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize",
      CLIENTE_ID: "",
      RESPONSE_TYPE: "id_token token",
      SCOPE: "openid email role documento",
      REDIRECT_URL: "http://localhost:8080/",
      SIGN_OUT_URL: "https://autenticacion.portaloas.udistrital.edu.co/oidc/logout",
      SIGN_OUT_REDIRECT_URL: "http://localhost:8080/",
      AUTENTICACION_MID: "https://autenticacion.portaloas.udistrital.edu.co/apioas/autenticacion_mid/v1/token/userRol",
    }  
  };