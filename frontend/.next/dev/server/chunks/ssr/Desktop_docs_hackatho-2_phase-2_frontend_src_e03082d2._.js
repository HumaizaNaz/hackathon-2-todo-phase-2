module.exports = [
"[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/lib/api-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiClient",
    ()=>apiClient,
    "taskApi",
    ()=>taskApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/lib/auth-client.ts [app-ssr] (ecmascript)");
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000/api") || 'http://localhost:8000/api';
class ApiClient {
    baseUrl;
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    async request(options) {
        // Get the token from sessionStorage
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthToken"])();
        const headers = new Headers(options.headers);
        // Set content type if not already set
        if (!headers.get('Content-Type')) {
            headers.set('Content-Type', 'application/json');
        }
        // Attach JWT token to Authorization header
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        const config = {
            ...options,
            headers,
            credentials: 'include' // Include cookies in requests
        };
        const response = await fetch(`${this.baseUrl}${options.url}`, config);
        // Handle 401 Unauthorized responses
        if (response.status === 401) {
            // Remove the invalid token
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Optionally redirect to login page
            window.location.href = '/login';
            throw new Error('Unauthorized: Please log in again');
        }
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
        }
        // For successful responses that have content
        if (response.status !== 204) {
            return await response.json();
        }
        // For 204 responses, return empty object or void
        return {};
    }
    async get(url, options) {
        return this.request({
            ...options,
            url,
            method: 'GET'
        });
    }
    async post(url, data, options) {
        return this.request({
            ...options,
            url,
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined
        });
    }
    async put(url, data, options) {
        return this.request({
            ...options,
            url,
            method: 'PUT',
            body: data ? JSON.stringify(data) : undefined
        });
    }
    async patch(url, data, options) {
        return this.request({
            ...options,
            url,
            method: 'PATCH',
            body: data ? JSON.stringify(data) : undefined
        });
    }
    async delete(url, options) {
        return this.request({
            ...options,
            url,
            method: 'DELETE'
        });
    }
}
const apiClient = new ApiClient(API_BASE_URL);
const taskApi = {
    getTasks: ()=>apiClient.get('/tasks'),
    createTask: (taskData)=>apiClient.post('/tasks', taskData),
    updateTask: (id, taskData)=>apiClient.put(`/tasks/${id}`, taskData),
    deleteTask: (id)=>apiClient.delete(`/tasks/${id}`),
    toggleTaskComplete: (id)=>apiClient.patch(`/tasks/${id}/complete`)
};
}),
"[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-ssr] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
// frontend/src/components/Sidebar.tsx
"use client";
;
;
;
;
function Sidebar({ onLogout }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = (path)=>pathname === path;
    const menuItems = [
        {
            href: "/",
            label: "Home",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            href: "/dashboard",
            label: "Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
        },
        {
            href: "/dashboard/todos",
            label: "Todos",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"]
        },
        {
            href: "/dashboard/profile",
            label: "Profile",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        },
        {
            href: "/dashboard/settings",
            label: "Settings",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "fixed inset-y-0 left-0 z-50 w-64 bg-[color:var(--bg-card)] border-r border-[color:var(--border-neon)] shadow-xl transform transition-transform duration-300 ease-in-out",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-[color:var(--border-neon)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-[color:var(--neon-cyan)]",
                            style: {
                                textShadow: '0 0 8px #00ffff, 0 0 15px #00ffff'
                            },
                            children: "Neon Todo"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex-1 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: menuItems.map((item)=>{
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${isActive(item.href) ? "bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 text-[color:var(--neon-cyan)] border border-[color:var(--border-neon)] shadow-[0_0_15px_rgba(255,0,255,0.3)]" : "text-[color:var(--text-secondary)] hover:text-[color:var(--neon-cyan)] hover:bg-[color:var(--bg-primary)]/30"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-5 h-5 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                                            lineNumber: 48,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 19
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                                lineNumber: 39,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-[color:var(--border-neon)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "w-full flex items-center px-4 py-3 rounded-lg text-[color:var(--text-primary)] hover:text-[color:var(--neon-pink)] hover:bg-[color:var(--bg-primary)]/30 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "w-5 h-5 mr-3"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/lib/api-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/components/Sidebar.tsx [app-ssr] (ecmascript)");
// frontend/src/app/dashboard/page.tsx
"use client";
;
;
;
;
;
;
function DashboardPage() {
    const { logout, isAuthenticated, loading, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTodoTitle, setNewTodoTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [newTodoDescription, setNewTodoDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingTodo, setEditingTodo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && !isAuthenticated) {
            router.push("/login");
        } else if (isAuthenticated) {
            fetchTodos();
        }
    }, [
        isAuthenticated,
        loading,
        router
    ]);
    const fetchTodos = async ()=>{
        setError("");
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["taskApi"].getTasks();
            setTodos(data);
        } catch (err) {
            setError(err.message);
        }
    };
    const handleAddTodo = async (e)=>{
        e.preventDefault();
        if (!newTodoTitle.trim()) return;
        setError("");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["taskApi"].createTask({
                title: newTodoTitle,
                description: newTodoDescription
            });
            setNewTodoTitle("");
            setNewTodoDescription("");
            fetchTodos();
        } catch (err) {
            setError(err.message);
        }
    };
    const handleUpdateTodo = async (todo)=>{
        setError("");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["taskApi"].updateTask(Number(todo.id), {
                title: todo.title,
                description: todo.description,
                completed: todo.completed
            });
            setEditingTodo(null);
            fetchTodos();
        } catch (err) {
            setError(err.message);
        }
    };
    const toggleTodoComplete = async (id)=>{
        setError("");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["taskApi"].toggleTaskComplete(Number(id));
            fetchTodos();
        } catch (err) {
            setError(err.message);
        }
    };
    const handleDeleteTodo = async (id)=>{
        setError("");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["taskApi"].deleteTask(Number(id));
            fetchTodos();
        } catch (err) {
            setError(err.message);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-[color:var(--neon-cyan)] animate-pulse",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[color:var(--bg-primary)] text-[color:var(--text-primary)] overflow-x-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full overflow-hidden -z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blob-c",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blob"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blob"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "blob"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onLogout: logout
                    }, void 0, false, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 ml-64 p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl font-bold text-[color:var(--neon-cyan)] mb-6",
                                            children: "Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-semibold text-[color:var(--text-primary)]",
                                                    children: [
                                                        "Welcome, ",
                                                        user?.email || user?.name || 'User',
                                                        "!"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: logout,
                                                    className: "mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 hover:from-[#ff00ff]/30 hover:to-[#00ffff]/30 border border-[color:var(--border-neon)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] text-[color:var(--text-primary)]",
                                                    children: "Logout"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 p-4 bg-[color:var(--bg-card)] rounded-lg border border-red-500/50 shadow-[0_0_15px_rgba(255,0,0,0.2)] text-red-300",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 p-6 bg-[color:var(--bg-card)] rounded-lg border border-[color:var(--border-neon)] shadow-[0_0_15px_rgba(255,0,255,0.2)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-4 text-[color:var(--neon-pink)]",
                                            children: "Add New Todo"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleAddTodo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "New todo title",
                                                    value: newTodoTitle,
                                                    onChange: (e)=>setNewTodoTitle(e.target.value),
                                                    className: "w-full p-3 mb-3 rounded-lg bg-[color:var(--bg-input)] border border-[color:var(--border-neon)] focus:ring-2 focus:ring-[color:var(--neon-cyan)] focus:border-transparent text-[color:var(--text-primary)] placeholder-[color:var(--text-secondary)]",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    placeholder: "Todo description (optional)",
                                                    value: newTodoDescription,
                                                    onChange: (e)=>setNewTodoDescription(e.target.value),
                                                    className: "w-full p-3 mb-4 rounded-lg bg-[color:var(--bg-input)] border border-[color:var(--border-neon)] focus:ring-2 focus:ring-[color:var(--neon-cyan)] focus:border-transparent text-[color:var(--text-primary)] placeholder-[color:var(--text-secondary)]",
                                                    rows: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "neon-button-primary px-6 py-3 text-lg",
                                                    children: "Add Todo"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[color:var(--bg-card)] rounded-lg border border-[color:var(--border-neon)] shadow-[0_0_15px_rgba(255,0,255,0.2)] p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-6 text-[color:var(--neon-cyan)]",
                                            children: "Your Todos"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: todos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl text-[color:var(--text-secondary)] mb-4",
                                                        children: "No todos yet. Add one above!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[color:var(--neon-cyan)] text-6xl animate-pulse",
                                                        children: "📝"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this) : todos.map((todo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between bg-[color:var(--bg-primary)]/50 p-4 rounded-lg border border-[color:var(--border-neon)] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 transform hover:scale-[1.01]",
                                                    children: editingTodo?.id === todo.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-grow flex flex-col space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: editingTodo.title,
                                                                onChange: (e)=>setEditingTodo({
                                                                        ...editingTodo,
                                                                        title: e.target.value
                                                                    }),
                                                                className: "w-full p-2 rounded-lg bg-[color:var(--bg-input)] border border-[color:var(--border-neon)] focus:ring-2 focus:ring-[color:var(--neon-cyan)] focus:border-transparent text-[color:var(--text-primary)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: editingTodo.description || "",
                                                                onChange: (e)=>setEditingTodo({
                                                                        ...editingTodo,
                                                                        description: e.target.value
                                                                    }),
                                                                className: "w-full p-2 rounded-lg bg-[color:var(--bg-input)] border border-[color:var(--border-neon)] focus:ring-2 focus:ring-[color:var(--neon-cyan)] focus:border-transparent text-[color:var(--text-primary)]",
                                                                rows: 2
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-4 mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        checked: editingTodo.completed,
                                                                        onChange: (e)=>setEditingTodo({
                                                                                ...editingTodo,
                                                                                completed: e.target.checked
                                                                            }),
                                                                        className: "h-5 w-5 text-[color:var(--neon-pink)] rounded focus:ring-[color:var(--neon-pink)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleUpdateTodo(editingTodo),
                                                                        className: "neon-button-primary px-4 py-2 text-sm",
                                                                        children: "Save"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setEditingTodo(null),
                                                                        className: "neon-button-secondary px-4 py-2 text-sm",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-grow",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-grow",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: `text-lg font-semibold ${todo.completed ? "line-through text-[color:var(--text-secondary)]/60" : "text-[color:var(--text-primary)]"}`,
                                                                            children: todo.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 227,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        todo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: `text-[color:var(--text-secondary)] mt-1 ${todo.completed ? "line-through" : ""}`,
                                                                            children: todo.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 231,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                    lineNumber: 226,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center space-x-3 ml-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: todo.completed,
                                                                            onChange: ()=>toggleTodoComplete(todo.id),
                                                                            className: "h-5 w-5 text-[color:var(--neon-pink)] rounded focus:ring-[color:var(--neon-pink)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 237,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setEditingTodo(todo),
                                                                            className: "neon-button-primary px-3 py-1 text-sm",
                                                                            children: "Edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 243,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDeleteTodo(todo.id),
                                                                            className: "neon-button-secondary px-3 py-1 text-sm",
                                                                            children: "Delete"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                            lineNumber: 249,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 25
                                                    }, this)
                                                }, todo.id, false, {
                                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_docs_hackatho-2_phase-2_frontend_src_e03082d2._.js.map