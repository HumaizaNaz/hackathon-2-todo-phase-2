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
// frontend/src/app/dashboard/page.tsx
"use client";
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
            className: "min-h-screen flex items-center justify-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
            lineNumber: 93,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4 text-[#ff00ff]",
                    children: "Your Todos"
                }, void 0, false, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 mb-4",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 100,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
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
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: logout,
                            className: "bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] hover:from-[#00bfff] hover:to-[#00ffff] text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105",
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleAddTodo,
                    className: "mb-6 p-4 bg-[color:var(--bg-card)] rounded-lg border border-[color:var(--border-neon)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "New todo title",
                            value: newTodoTitle,
                            onChange: (e)=>setNewTodoTitle(e.target.value),
                            className: "border border-[color:var(--border-neon)] p-2 rounded w-full mb-2 focus:ring-2 focus:ring-[#ff00ff] focus:border-transparent bg-[color:var(--bg-card)] text-[color:var(--text-primary)]",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            placeholder: "Todo description (optional)",
                            value: newTodoDescription,
                            onChange: (e)=>setNewTodoDescription(e.target.value),
                            className: "border border-[color:var(--border-neon)] p-2 rounded w-full mb-4 focus:ring-2 focus:ring-[#ff00ff] focus:border-transparent bg-[color:var(--bg-card)] text-[color:var(--text-primary)]",
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] hover:from-[#00bfff] hover:to-[#00ffff] text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105",
                            children: "Add Todo"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: todos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center py-8 text-[color:var(--text-primary)]",
                        children: "No todos yet. Add one above!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this) : todos.map((todo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-[color:var(--bg-card)] p-3 mb-2 rounded-lg shadow-sm border border-[color:var(--border-neon)] hover:shadow-lg hover:border-[#00ffff] transition-all duration-300 transform hover:scale-[1.01]",
                            children: editingTodo?.id === todo.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: editingTodo.title,
                                        onChange: (e)=>setEditingTodo({
                                                ...editingTodo,
                                                title: e.target.value
                                            }),
                                        className: "border border-[color:var(--border-neon)] p-1 rounded flex-grow mr-2 focus:ring-2 focus:ring-[#ff00ff] focus:border-transparent bg-[color:var(--bg-card)] text-[color:var(--text-primary)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: editingTodo.description || "",
                                        onChange: (e)=>setEditingTodo({
                                                ...editingTodo,
                                                description: e.target.value
                                            }),
                                        className: "border border-[color:var(--border-neon)] p-1 rounded flex-grow mr-2 focus:ring-2 focus:ring-[#ff00ff] focus:border-transparent bg-[color:var(--bg-card)] text-[color:var(--text-primary)]",
                                        rows: 1
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: editingTodo.completed,
                                        onChange: (e)=>setEditingTodo({
                                                ...editingTodo,
                                                completed: e.target.checked
                                            }),
                                        className: "mr-2 h-5 w-5 text-[#ff00ff] rounded focus:ring-[#ff00ff]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleUpdateTodo(editingTodo),
                                        className: "bg-gradient-to-r from-[#00ffff] to-[#00bfff] hover:from-[#ff00ff] hover:to-[#9d00ff] text-white font-bold py-1 px-2 rounded text-sm mr-2 shadow transition-all duration-300 transform hover:scale-105",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditingTodo(null),
                                        className: "bg-gradient-to-r from-[#94a3b8] to-[#64748b] hover:from-[#ff00ff] hover:to-[#9d00ff] text-white font-bold py-1 px-2 rounded text-sm shadow transition-all duration-300 transform hover:scale-105",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `font-semibold ${todo.completed ? "line-through text-[#94a3b8]" : "text-[color:var(--text-primary)]"}`,
                                                children: todo.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 23
                                            }, this),
                                            todo.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm ${todo.completed ? "line-through text-[#94a3b8]" : "text-[color:var(--text-primary)]"}`,
                                                children: todo.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: todo.completed,
                                        onChange: ()=>toggleTodoComplete(todo.id),
                                        className: "mr-2 h-5 w-5 text-[#ff00ff] rounded focus:ring-[#ff00ff]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditingTodo(todo),
                                        className: "bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] hover:from-[#00bfff] hover:to-[#00ffff] text-white font-bold py-1 px-2 rounded text-sm mr-2 shadow transition-all duration-300 transform hover:scale-105",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$docs$2f$hackatho$2d$2$2f$phase$2d$2$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDeleteTodo(todo.id),
                                        className: "bg-gradient-to-r from-[#ff00ff] to-[#9d00ff] hover:from-[#00bfff] hover:to-[#00ffff] text-white font-bold py-1 px-2 rounded text-sm shadow transition-all duration-300 transform hover:scale-105",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, todo.id, false, {
                            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                            lineNumber: 140,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/docs/hackatho-2/phase-2/frontend/src/app/dashboard/page.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_docs_hackatho-2_phase-2_frontend_src_1428bacd._.js.map