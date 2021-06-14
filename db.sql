drop database if exists personal_finance;
create database if not exists personal_finance;
use personal_finance;

create table users(
id int not null auto_increment,
name varchar(255) not null,
last_name varchar(255) not null,
email varchar(255) not null,
pass varchar(255) not null,
avatar varchar(255),
primary key (id)
);

create table op_type(
id int not null auto_increment,
name varchar(255) not null,
primary key(id)
);

create table categories(
id int not null auto_increment,
op_type_id int not null,
name varchar(255) not null,
primary key (id),
foreign key (op_type_id) references op_type(id)
);

create table operations(
id int not null auto_increment,
concept varchar (255)not null,
amount decimal(11,2) not null,
op_date date not null,
category_id int not null,
op_type_id int not null,
user_id int not null,
primary key (id),
foreign key (category_id)references categories(id),
foreign key (op_type_id) references op_type(id),
foreign key (user_id) references users(id)
);

insert into op_type values (null, "Ingreso");
insert into op_type values (null, "Egreso");

insert into categories values (null, 1, "Salario");
insert into categories values (null, 1, "Aguinaldo");
insert into categories values (null, 1, "Honorarios");
insert into categories values (null, 1, "Intereses");
insert into categories values (null, 1, "Ingreso Extraordinario");

insert into categories values (null, 2, "Supermercado");
insert into categories values (null, 2, "Comida");
insert into categories values (null, 2, "Expensas");
insert into categories values (null, 2, "Colegio");
insert into categories values (null, 2, "Seguro");

insert into users values (null, "Admin", "Admin", "admin@admin.com", 12345678, null);
insert into operations values (null, "marzo 2021", 10000, curdate(), 1, 1,1);
insert into operations values (null, "coto", 2000, curdate(), 6, 2,1);