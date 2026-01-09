module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/postgres/src/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/drizzle-orm/postgres-js/driver.js [app-route] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$postgres$2f$src$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(process.env.DATABASE_URL, {
    ssl: "require"
});
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$drizzle$2d$orm$2f$postgres$2d$js$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(client);
}),
"[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/better-auth/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$auth$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/better-auth/dist/auth/auth.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/better-auth/dist/adapters/drizzle-adapter/drizzle-adapter.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/better-auth/dist/integrations/next-js.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/better-auth/dist/plugins/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/better-auth/dist/plugins/jwt/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/lib/db.ts [app-route] (ecmascript)");
;
;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$auth$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterAuth"])({
    database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzleAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"], {
        provider: "pg"
    }),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: "http://localhost:3000",
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextCookies"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$jwt$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jwt"])({
            jwt: {
                expirationTime: "7d"
            }
        })
    ]
});
}),
"[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/api/auth/[...all]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/better-auth/dist/integrations/next-js.mjs [app-route] (ecmascript)"); // Use toNextJSHandler as per error.md
;
;
const { GET, POST } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toNextJsHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"]); // As per error.md
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__028a6c56._.js.map