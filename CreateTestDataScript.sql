INSERT INTO mydb.roles (name)
VALUES ('ROLE_ADMIN');
INSERT INTO mydb.roles (name)
VALUES ('ROLE_USER');
INSERT INTO mydb.users (age, surname, phone, name, password)
VALUES (1, '1', 1, '1', '$2a$12$xvEfkkEp/EsxV6pNXKHARurMtGSMdN.I7lYUR6LplTTuwVFJpBjDK');
INSERT INTO mydb.users (age, surname, phone, name, password)
VALUES (2, '2', 2, '2', '$2a$12$viOr.ar1gF83jgzuXLAAgO3Iaac95hNXWUnwPs.TLuruUOsf27QeW');
INSERT INTO mydb.users_roles (users_id, roles_id)
VALUES (1, 1);
INSERT INTO mydb.users_roles (users_id, roles_id)
VALUES (2, 2);

