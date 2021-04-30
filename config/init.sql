drop database train_me if exists;
create database train_me;
use database train_me;
create table user if not exists (
    user_sysid int not null auto_increment,
    user_email varchar(100) unique,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    create_ts date,
    update_ts date,
    primary key (user_sysid),
);
create table exercise if not exists (
    exercise_sysid int not null auto_increment,
    exercise_name varchar(100) not null,
    exercise_description varchar(1000),
    create_ts date,
    create_user_sysid int not null,
    update_ts date,
    update_user_sysid int not null,
    primary key (exercise_sysid),
    foreign key (create_user_sysid) references user(user_sysid),
    foreign key (update_user_sysid) references user(user_sysid)
);
create table training_plan if not exists (
    training_plan_sysid int not null auto_increment,
    training_plan_name varchar(100) not null,
    training_plan_description varchar(1000),
    create_ts date,
    create_user_sysid int not null,
    update_ts date,
    update_user_sysid int not null,
    primary key (training_plan_sysid),
    foreign key (create_user_sysid) references user(user_sysid),
    foreign key (update_user_sysid) references user(user_sysid)
);
create table training_plan_type if not exists (
    training_plan_type_sysid int not null auto_increment,
    training_plan_type_name varchar(100) not null,
    training_plan_type_description varchar(1000),
    create_ts date,
    create_user_sysid int not null,
    update_ts date,
    update_user_sysid int not null,
    primary key (training_plan_type_sysid),
    foreign key (create_user_sysid) references user(user_sysid),
    foreign key (update_user_sysid) references user(user_sysid)
);
create user 'springuser' @'%' identified by 'ThePassword';
grant select,
    insert,
    delete,
    update on train_me.* to 'springuser' @'%';