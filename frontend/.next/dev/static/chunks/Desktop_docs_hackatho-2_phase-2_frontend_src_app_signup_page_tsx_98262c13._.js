(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignUpPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/lib/auth-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// frontend/src/app/signup/page.tsx
"use client";
;
;
;
function SignUpPage() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customSignUp"])(email, password);
            router.push("/login?message=Signup successful, please log in.");
        } catch (err) {
            setError(err.message || "An unexpected error occurred.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full overflow-hidden -z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blob-c",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blob"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blob"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blob"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full space-y-8 card bg-[color:var(--bg-card)]/90 backdrop-blur-sm rounded-xl border border-[color:var(--border-neon)] shadow-[0_0_30px_rgba(255,0,255,0.3)] p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-6 text-center text-3xl font-extrabold text-[color:var(--text-primary)]",
                            children: "Sign up for an account"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "mt-8 space-y-6",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md shadow-sm -space-y-px",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email-address",
                                                className: "sr-only",
                                                children: "Email address"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "email-address",
                                                name: "email",
                                                type: "email",
                                                autoComplete: "email",
                                                required: true,
                                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-[color:var(--border-neon)] placeholder-[color:var(--text-primary)] text-[color:var(--text-primary)] rounded-t-md focus:outline-none focus:ring-[color:var(--border-neon)] focus:border-[color:var(--border-neon)] focus:z-10 sm:text-sm bg-[color:var(--bg-input)]",
                                                placeholder: "Email address",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "password",
                                                className: "sr-only",
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "password",
                                                name: "password",
                                                type: "password",
                                                autoComplete: "new-password",
                                                required: true,
                                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-[color:var(--border-neon)] placeholder-[color:var(--text-primary)] text-[color:var(--text-primary)] rounded-b-md focus:outline-none focus:ring-[color:var(--border-neon)] focus:border-[color:var(--border-neon)] focus:z-10 sm:text-sm bg-[color:var(--bg-input)]",
                                                placeholder: "Password",
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-center text-sm text-red-300",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] hover:from-[#00bfff] hover:to-[#00ffff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff00ff] transition-all duration-300 transform hover:scale-105",
                                    children: "Sign up"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "font-medium text-[#ff00ff] hover:text-[#00ffff] transition-colors duration-300",
                            children: "Already have an account? Sign in"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/signup/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(SignUpPage, "nORxhW6qfpGzR0M5TFYU5NIDhVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignUpPage;
var _c;
__turbopack_context__.k.register(_c, "SignUpPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_docs_hackatho-2_phase-2_frontend_src_app_signup_page_tsx_98262c13._.js.map