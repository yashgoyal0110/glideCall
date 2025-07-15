import { createAuthClient } from "better-auth/client";
export const authClient = createAuthClient({
  basePath: "/api/auth",
  sessionPath: "/your/custom/session/path"
});


