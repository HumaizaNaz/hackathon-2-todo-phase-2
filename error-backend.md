===== Application Startup at 2026-01-12 22:37:30 =====

INFO:     Started server process [1]
INFO:     Waiting for application startup.
Creating tables...
2026-01-12 22:37:40,314 INFO sqlalchemy.engine.Engine select pg_catalog.version()
2026-01-12 22:37:40,314 INFO sqlalchemy.engine.Engine [raw sql] {}
2026-01-12 22:37:40,317 INFO sqlalchemy.engine.Engine select current_schema()
2026-01-12 22:37:40,317 INFO sqlalchemy.engine.Engine [raw sql] {}
2026-01-12 22:37:40,320 INFO sqlalchemy.engine.Engine show standard_conforming_strings
2026-01-12 22:37:40,320 INFO sqlalchemy.engine.Engine [raw sql] {}
2026-01-12 22:37:40,324 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:37:40,324 INFO sqlalchemy.engine.Engine 
                DO $$
                BEGIN
                    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                                   WHERE table_name = 'user' AND column_name = 'name') THEN
                        ALTER TABLE "user" ADD COLUMN name VARCHAR(255);
                    END IF;
                END $$;
            
2026-01-12 22:37:40,324 INFO sqlalchemy.engine.Engine [generated in 0.00019s] {}
2026-01-12 22:37:40,330 INFO sqlalchemy.engine.Engine 
                DO $$
                BEGIN
                    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                                   WHERE table_name = 'task' AND column_name = 'completed') THEN
                        ALTER TABLE task ADD COLUMN completed BOOLEAN DEFAULT FALSE;
                    END IF;
                END $$;
            
2026-01-12 22:37:40,330 INFO sqlalchemy.engine.Engine [generated in 0.00013s] {}
2026-01-12 22:37:40,333 INFO sqlalchemy.engine.Engine 
                DO $$
                BEGIN
                    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                                   WHERE table_name = 'task' AND column_name = 'created_at') THEN
                        ALTER TABLE task ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
                    END IF;
                END $$;
            
2026-01-12 22:37:40,333 INFO sqlalchemy.engine.Engine [generated in 0.00012s] {}
2026-01-12 22:37:40,336 INFO sqlalchemy.engine.Engine 
                DO $$
                BEGIN
                    IF NOT EXISTS (SELECT 1 FROM information_schema.columns
                                   WHERE table_name = 'task' AND column_name = 'updated_at') THEN
                        ALTER TABLE task ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
                    END IF;
                END $$;
            
2026-01-12 22:37:40,336 INFO sqlalchemy.engine.Engine [generated in 0.00012s] {}
2026-01-12 22:37:40,339 INFO sqlalchemy.engine.Engine COMMIT
2026-01-12 22:37:40,341 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:37:40,345 INFO sqlalchemy.engine.Engine SELECT pg_catalog.pg_class.relname 
FROM pg_catalog.pg_class JOIN pg_catalog.pg_namespace ON pg_catalog.pg_namespace.oid = pg_catalog.pg_class.relnamespace 
WHERE pg_catalog.pg_class.relname = %(table_name)s AND pg_catalog.pg_class.relkind = ANY (ARRAY[%(param_1)s, %(param_2)s, %(param_3)s, %(param_4)s, %(param_5)s]) AND pg_catalog.pg_table_is_visible(pg_catalog.pg_class.oid) AND pg_catalog.pg_namespace.nspname != %(nspname_1)s
2026-01-12 22:37:40,345 INFO sqlalchemy.engine.Engine [generated in 0.00015s] {'table_name': 'user', 'param_1': 'r', 'param_2': 'p', 'param_3': 'f', 'param_4': 'v', 'param_5': 'm', 'nspname_1': 'pg_catalog'}
2026-01-12 22:37:40,348 INFO sqlalchemy.engine.Engine SELECT pg_catalog.pg_class.relname 
FROM pg_catalog.pg_class JOIN pg_catalog.pg_namespace ON pg_catalog.pg_namespace.oid = pg_catalog.pg_class.relnamespace 
WHERE pg_catalog.pg_class.relname = %(table_name)s AND pg_catalog.pg_class.relkind = ANY (ARRAY[%(param_1)s, %(param_2)s, %(param_3)s, %(param_4)s, %(param_5)s]) AND pg_catalog.pg_table_is_visible(pg_catalog.pg_class.oid) AND pg_catalog.pg_namespace.nspname != %(nspname_1)s
2026-01-12 22:37:40,348 INFO sqlalchemy.engine.Engine [cached since 0.003742s ago] {'table_name': 'task', 'param_1': 'r', 'param_2': 'p', 'param_3': 'f', 'param_4': 'v', 'param_5': 'm', 'nspname_1': 'pg_catalog'}
2026-01-12 22:37:40,350 INFO sqlalchemy.engine.Engine COMMIT
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:7860 (Press CTRL+C to quit)
Tables created!
INFO:     10.16.18.254:58150 - "GET /?logs=container HTTP/1.1" 200 OK
INFO:     10.16.43.133:5105 - "GET /?logs=container HTTP/1.1" 200 OK
2026-01-12 22:38:40,130 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:38:40,136 INFO sqlalchemy.engine.Engine SELECT task.id AS task_id, task.title AS task_title, task.description AS task_description, task.status AS task_status, task.completed AS task_completed, task.created_at AS task_created_at, task.updated_at AS task_updated_at, task.user_id AS task_user_id 
FROM task 
WHERE task.id = %(pk_1)s
2026-01-12 22:38:40,136 INFO sqlalchemy.engine.Engine [generated in 0.00018s] {'pk_1': 7}
2026-01-12 22:38:40,142 INFO sqlalchemy.engine.Engine DELETE FROM task WHERE task.id = %(id)s
2026-01-12 22:38:40,142 INFO sqlalchemy.engine.Engine [generated in 0.00013s] {'id': 7}
2026-01-12 22:38:40,144 INFO sqlalchemy.engine.Engine ROLLBACK
INFO:     10.16.43.133:1918 - "DELETE /api/tasks/7 HTTP/1.1" 500 Internal Server Error
ERROR:    Exception in ASGI application
Traceback (most recent call last):
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/default.py", line 952, in do_execute
    cursor.execute(statement, parameters)
psycopg2.errors.ForeignKeyViolation: update or delete on table "task" violates foreign key constraint "taskhistory_task_id_fkey" on table "taskhistory"
DETAIL:  Key (id)=(7) is still referenced from table "taskhistory".


The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/home/user/.local/lib/python3.12/site-packages/uvicorn/protocols/http/h11_impl.py", line 410, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__
    return await self.app(scope, receive, send)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/applications.py", line 1135, in __call__
    await super().__call__(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/applications.py", line 107, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/errors.py", line 186, in __call__
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/errors.py", line 164, in __call__
    await self.app(scope, receive, _send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/cors.py", line 93, in __call__
    await self.simple_response(scope, receive, send, request_headers=headers)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/cors.py", line 144, in simple_response
    await self.app(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 191, in __call__
    with recv_stream, send_stream, collapse_excgroups():
                                   ^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/contextlib.py", line 158, in __exit__
    self.gen.throw(value)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_utils.py", line 85, in collapse_excgroups
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 193, in __call__
    response = await self.dispatch_func(request, call_next)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/app/core/jwt_auth.py", line 58, in jwt_middleware
    return await call_next(request)
           ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 168, in call_next
    raise app_exc from app_exc.__cause__ or app_exc.__context__
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 144, in coro
    await self.app(scope, receive_or_disconnect, send_no_error)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 191, in __call__
    with recv_stream, send_stream, collapse_excgroups():
                                   ^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/contextlib.py", line 158, in __exit__
    self.gen.throw(value)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_utils.py", line 85, in collapse_excgroups
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 193, in __call__
    response = await self.dispatch_func(request, call_next)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/app/main.py", line 32, in dispatch
    response = await call_next(request)
               ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 168, in call_next
    raise app_exc from app_exc.__cause__ or app_exc.__context__
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 144, in coro
    await self.app(scope, receive_or_disconnect, send_no_error)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/exceptions.py", line 63, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app
    await app(scope, receive, sender)
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__
    await self.app(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/routing.py", line 716, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/routing.py", line 736, in app
    await route.handle(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/routing.py", line 290, in handle
    await self.app(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/routing.py", line 115, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app
    await app(scope, receive, sender)
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/routing.py", line 101, in app
    response = await f(request)
               ^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/routing.py", line 355, in app
    raw_response = await run_endpoint_function(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/routing.py", line 245, in run_endpoint_function
    return await run_in_threadpool(dependant.call, **values)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool
    return await anyio.to_thread.run_sync(func)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/anyio/to_thread.py", line 63, in run_sync
    return await get_async_backend().run_sync_in_worker_thread(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/anyio/_backends/_asyncio.py", line 2502, in run_sync_in_worker_thread
    return await future
           ^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/anyio/_backends/_asyncio.py", line 986, in run
    result = context.run(func, *args)
             ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/app/routes/tasks.py", line 112, in delete_task
    session.commit()
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 2030, in commit
    trans.commit(_to_root=True)
  File "<string>", line 2, in commit
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/state_changes.py", line 137, in _go
    ret_value = fn(self, *arg, **kw)
                ^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 1311, in commit
    self._prepare_impl()
  File "<string>", line 2, in _prepare_impl
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/state_changes.py", line 137, in _go
    ret_value = fn(self, *arg, **kw)
                ^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 1286, in _prepare_impl
    self.session.flush()
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 4331, in flush
    self._flush(objects)
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 4466, in _flush
    with util.safe_reraise():
         ^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/util/langhelpers.py", line 224, in __exit__
    raise exc_value.with_traceback(exc_tb)
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 4427, in _flush
    flush_context.execute()
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/unitofwork.py", line 466, in execute
    rec.execute(self)
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/unitofwork.py", line 679, in execute
    util.preloaded.orm_persistence.delete_obj(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/persistence.py", line 193, in delete_obj
    _emit_delete_statements(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/persistence.py", line 1471, in _emit_delete_statements
    c = connection.execute(
        ^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1419, in execute
    return meth(
           ^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 527, in _execute_on_connection
    return connection._execute_clauseelement(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1641, in _execute_clauseelement
    ret = self._execute_context(
          ^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context
    return self._exec_single_context(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
    self._handle_dbapi_exception(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 2363, in _handle_dbapi_exception
    raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/default.py", line 952, in do_execute
    cursor.execute(statement, parameters)
sqlalchemy.exc.IntegrityError: (psycopg2.errors.ForeignKeyViolation) update or delete on table "task" violates foreign key constraint "taskhistory_task_id_fkey" on table "taskhistory"
DETAIL:  Key (id)=(7) is still referenced from table "taskhistory".

[SQL: DELETE FROM task WHERE task.id = %(id)s]
[parameters: {'id': 7}]
(Background on this error at: https://sqlalche.me/e/20/gkpj)
INFO:     10.16.43.133:21586 - "POST /api/tasks HTTP/1.1" 307 Temporary Redirect
2026-01-12 22:39:03,662 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:03,664 INFO sqlalchemy.engine.Engine INSERT INTO task (title, description, status, completed, created_at, updated_at, user_id) VALUES (%(title)s, %(description)s, %(status)s, %(completed)s, %(created_at)s, %(updated_at)s, %(user_id)s::UUID) RETURNING task.id
2026-01-12 22:39:03,664 INFO sqlalchemy.engine.Engine [generated in 0.00020s] {'title': 'cooking', 'description': 'make a cake at 6 o clock', 'status': 'pending', 'completed': False, 'created_at': datetime.datetime(2026, 1, 12, 22, 39, 3, 662165), 'updated_at': datetime.datetime(2026, 1, 12, 22, 39, 3, 662165), 'user_id': UUID('289933ac-c85a-4409-82a6-adefc72922d8')}
2026-01-12 22:39:03,668 INFO sqlalchemy.engine.Engine COMMIT
2026-01-12 22:39:03,671 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:03,673 INFO sqlalchemy.engine.Engine SELECT task.id, task.title, task.description, task.status, task.completed, task.created_at, task.updated_at, task.user_id 
FROM task 
WHERE task.id = %(pk_1)s
2026-01-12 22:39:03,673 INFO sqlalchemy.engine.Engine [generated in 0.00019s] {'pk_1': 9}
INFO:     10.16.18.254:22080 - "POST /api/tasks/ HTTP/1.1" 200 OK
2026-01-12 22:39:03,678 INFO sqlalchemy.engine.Engine ROLLBACK
INFO:     10.16.43.133:21586 - "GET /api/tasks HTTP/1.1" 307 Temporary Redirect
2026-01-12 22:39:04,143 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:04,144 INFO sqlalchemy.engine.Engine SELECT task.id, task.title, task.description, task.status, task.completed, task.created_at, task.updated_at, task.user_id 
FROM task 
WHERE task.user_id = %(user_id_1)s::UUID
2026-01-12 22:39:04,144 INFO sqlalchemy.engine.Engine [generated in 0.00018s] {'user_id_1': UUID('289933ac-c85a-4409-82a6-adefc72922d8')}
INFO:     10.16.43.133:21586 - "GET /api/tasks/ HTTP/1.1" 200 OK
2026-01-12 22:39:04,149 INFO sqlalchemy.engine.Engine ROLLBACK
2026-01-12 22:39:09,504 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:09,504 INFO sqlalchemy.engine.Engine SELECT task.id AS task_id, task.title AS task_title, task.description AS task_description, task.status AS task_status, task.completed AS task_completed, task.created_at AS task_created_at, task.updated_at AS task_updated_at, task.user_id AS task_user_id 
FROM task 
WHERE task.id = %(pk_1)s
2026-01-12 22:39:09,504 INFO sqlalchemy.engine.Engine [cached since 29.37s ago] {'pk_1': 9}
2026-01-12 22:39:09,509 INFO sqlalchemy.engine.Engine UPDATE task SET completed=%(completed)s, updated_at=%(updated_at)s WHERE task.id = %(task_id)s
2026-01-12 22:39:09,509 INFO sqlalchemy.engine.Engine [generated in 0.00014s] {'completed': True, 'updated_at': datetime.datetime(2026, 1, 12, 22, 39, 9, 508850), 'task_id': 9}
2026-01-12 22:39:09,512 INFO sqlalchemy.engine.Engine COMMIT
2026-01-12 22:39:09,514 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:09,515 INFO sqlalchemy.engine.Engine SELECT task.id, task.title, task.description, task.status, task.completed, task.created_at, task.updated_at, task.user_id 
FROM task 
WHERE task.id = %(pk_1)s
2026-01-12 22:39:09,515 INFO sqlalchemy.engine.Engine [cached since 5.842s ago] {'pk_1': 9}
INFO:     10.16.18.254:10582 - "PATCH /api/tasks/9/toggle-complete HTTP/1.1" 200 OK
2026-01-12 22:39:09,519 INFO sqlalchemy.engine.Engine ROLLBACK
INFO:     10.16.18.254:10582 - "GET /api/tasks HTTP/1.1" 307 Temporary Redirect
2026-01-12 22:39:10,041 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:10,041 INFO sqlalchemy.engine.Engine SELECT task.id, task.title, task.description, task.status, task.completed, task.created_at, task.updated_at, task.user_id 
FROM task 
WHERE task.user_id = %(user_id_1)s::UUID
2026-01-12 22:39:10,041 INFO sqlalchemy.engine.Engine [cached since 5.897s ago] {'user_id_1': UUID('289933ac-c85a-4409-82a6-adefc72922d8')}
INFO:     10.16.43.133:54034 - "GET /api/tasks/ HTTP/1.1" 200 OK
2026-01-12 22:39:10,046 INFO sqlalchemy.engine.Engine ROLLBACK
2026-01-12 22:39:14,215 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:14,216 INFO sqlalchemy.engine.Engine SELECT task.id AS task_id, task.title AS task_title, task.description AS task_description, task.status AS task_status, task.completed AS task_completed, task.created_at AS task_created_at, task.updated_at AS task_updated_at, task.user_id AS task_user_id 
FROM task 
WHERE task.id = %(pk_1)s
2026-01-12 22:39:14,216 INFO sqlalchemy.engine.Engine [cached since 34.08s ago] {'pk_1': 9}
2026-01-12 22:39:14,220 INFO sqlalchemy.engine.Engine DELETE FROM task WHERE task.id = %(id)s
2026-01-12 22:39:14,220 INFO sqlalchemy.engine.Engine [cached since 34.08s ago] {'id': 9}
2026-01-12 22:39:14,222 INFO sqlalchemy.engine.Engine COMMIT
INFO:     10.16.43.133:3988 - "DELETE /api/tasks/9 HTTP/1.1" 200 OK
INFO:     10.16.43.133:3988 - "GET /api/tasks HTTP/1.1" 307 Temporary Redirect
2026-01-12 22:39:14,702 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:14,703 INFO sqlalchemy.engine.Engine SELECT task.id, task.title, task.description, task.status, task.completed, task.created_at, task.updated_at, task.user_id 
FROM task 
WHERE task.user_id = %(user_id_1)s::UUID
2026-01-12 22:39:14,703 INFO sqlalchemy.engine.Engine [cached since 10.56s ago] {'user_id_1': UUID('289933ac-c85a-4409-82a6-adefc72922d8')}
INFO:     10.16.43.133:3988 - "GET /api/tasks/ HTTP/1.1" 200 OK
2026-01-12 22:39:14,707 INFO sqlalchemy.engine.Engine ROLLBACK
2026-01-12 22:39:15,357 INFO sqlalchemy.engine.Engine BEGIN (implicit)
2026-01-12 22:39:15,357 INFO sqlalchemy.engine.Engine SELECT task.id AS task_id, task.title AS task_title, task.description AS task_description, task.status AS task_status, task.completed AS task_completed, task.created_at AS task_created_at, task.updated_at AS task_updated_at, task.user_id AS task_user_id 
FROM task 
WHERE task.id = %(pk_1)s
2026-01-12 22:39:15,357 INFO sqlalchemy.engine.Engine [cached since 35.22s ago] {'pk_1': 7}
2026-01-12 22:39:15,362 INFO sqlalchemy.engine.Engine DELETE FROM task WHERE task.id = %(id)s
2026-01-12 22:39:15,362 INFO sqlalchemy.engine.Engine [cached since 35.22s ago] {'id': 7}
2026-01-12 22:39:15,364 INFO sqlalchemy.engine.Engine ROLLBACK
INFO:     10.16.18.254:21964 - "DELETE /api/tasks/7 HTTP/1.1" 500 Internal Server Error
ERROR:    Exception in ASGI application
Traceback (most recent call last):
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/default.py", line 952, in do_execute
    cursor.execute(statement, parameters)
psycopg2.errors.ForeignKeyViolation: update or delete on table "task" violates foreign key constraint "taskhistory_task_id_fkey" on table "taskhistory"
DETAIL:  Key (id)=(7) is still referenced from table "taskhistory".


The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/home/user/.local/lib/python3.12/site-packages/uvicorn/protocols/http/h11_impl.py", line 410, in run_asgi
    result = await app(  # type: ignore[func-returns-value]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/uvicorn/middleware/proxy_headers.py", line 60, in __call__
    return await self.app(scope, receive, send)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/applications.py", line 1135, in __call__
    await super().__call__(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/applications.py", line 107, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/errors.py", line 186, in __call__
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/errors.py", line 164, in __call__
    await self.app(scope, receive, _send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/cors.py", line 93, in __call__
    await self.simple_response(scope, receive, send, request_headers=headers)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/cors.py", line 144, in simple_response
    await self.app(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 191, in __call__
    with recv_stream, send_stream, collapse_excgroups():
                                   ^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/contextlib.py", line 158, in __exit__
    self.gen.throw(value)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_utils.py", line 85, in collapse_excgroups
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 193, in __call__
    response = await self.dispatch_func(request, call_next)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/app/core/jwt_auth.py", line 58, in jwt_middleware
    return await call_next(request)
           ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 168, in call_next
    raise app_exc from app_exc.__cause__ or app_exc.__context__
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 144, in coro
    await self.app(scope, receive_or_disconnect, send_no_error)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 191, in __call__
    with recv_stream, send_stream, collapse_excgroups():
                                   ^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/contextlib.py", line 158, in __exit__
    self.gen.throw(value)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_utils.py", line 85, in collapse_excgroups
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 193, in __call__
    response = await self.dispatch_func(request, call_next)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/app/main.py", line 32, in dispatch
    response = await call_next(request)
               ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 168, in call_next
    raise app_exc from app_exc.__cause__ or app_exc.__context__
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/base.py", line 144, in coro
    await self.app(scope, receive_or_disconnect, send_no_error)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/middleware/exceptions.py", line 63, in __call__
    await wrap_app_handling_exceptions(self.app, conn)(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app
    await app(scope, receive, sender)
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/middleware/asyncexitstack.py", line 18, in __call__
    await self.app(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/routing.py", line 716, in __call__
    await self.middleware_stack(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/routing.py", line 736, in app
    await route.handle(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/routing.py", line 290, in handle
    await self.app(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/routing.py", line 115, in app
    await wrap_app_handling_exceptions(app, request)(scope, receive, send)
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_exception_handler.py", line 53, in wrapped_app
    raise exc
  File "/home/user/.local/lib/python3.12/site-packages/starlette/_exception_handler.py", line 42, in wrapped_app
    await app(scope, receive, sender)
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/routing.py", line 101, in app
    response = await f(request)
               ^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/routing.py", line 355, in app
    raw_response = await run_endpoint_function(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/fastapi/routing.py", line 245, in run_endpoint_function
    return await run_in_threadpool(dependant.call, **values)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/starlette/concurrency.py", line 32, in run_in_threadpool
    return await anyio.to_thread.run_sync(func)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/anyio/to_thread.py", line 63, in run_sync
    return await get_async_backend().run_sync_in_worker_thread(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/anyio/_backends/_asyncio.py", line 2502, in run_sync_in_worker_thread
    return await future
           ^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/anyio/_backends/_asyncio.py", line 986, in run
    result = context.run(func, *args)
             ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/app/routes/tasks.py", line 112, in delete_task
    session.commit()
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 2030, in commit
    trans.commit(_to_root=True)
  File "<string>", line 2, in commit
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/state_changes.py", line 137, in _go
    ret_value = fn(self, *arg, **kw)
                ^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 1311, in commit
    self._prepare_impl()
  File "<string>", line 2, in _prepare_impl
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/state_changes.py", line 137, in _go
    ret_value = fn(self, *arg, **kw)
                ^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 1286, in _prepare_impl
    self.session.flush()
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 4331, in flush
    self._flush(objects)
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 4466, in _flush
    with util.safe_reraise():
         ^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/util/langhelpers.py", line 224, in __exit__
    raise exc_value.with_traceback(exc_tb)
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/session.py", line 4427, in _flush
    flush_context.execute()
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/unitofwork.py", line 466, in execute
    rec.execute(self)
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/unitofwork.py", line 679, in execute
    util.preloaded.orm_persistence.delete_obj(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/persistence.py", line 193, in delete_obj
    _emit_delete_statements(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/orm/persistence.py", line 1471, in _emit_delete_statements
    c = connection.execute(
        ^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1419, in execute
    return meth(
           ^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/sql/elements.py", line 527, in _execute_on_connection
    return connection._execute_clauseelement(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1641, in _execute_clauseelement
    ret = self._execute_context(
          ^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1846, in _execute_context
    return self._exec_single_context(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1986, in _exec_single_context
    self._handle_dbapi_exception(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 2363, in _handle_dbapi_exception
    raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/base.py", line 1967, in _exec_single_context
    self.dialect.do_execute(
  File "/home/user/.local/lib/python3.12/site-packages/sqlalchemy/engine/default.py", line 952, in do_execute
    cursor.execute(statement, parameters)
sqlalchemy.exc.IntegrityError: (psycopg2.errors.ForeignKeyViolation) update or delete on table "task" violates foreign key constraint "taskhistory_task_id_fkey" on table "taskhistory"
DETAIL:  Key (id)=(7) is still referenced from table "taskhistory".

[SQL: DELETE FROM task WHERE task.id = %(id)s]
[parameters: {'id': 7}]
(Background on this error at: https://sqlalche.me/e/20/gkpj)
 