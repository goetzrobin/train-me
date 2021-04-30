DROP DATABASE IF EXISTS train_me;
CREATE DATABASE train_me;
USE train_me;
create table user (
    user_sysid int not null auto_increment,
    user_email varchar(100) unique,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    create_ts date,
    update_ts date,
    primary key (user_sysid)
);
create table exercise (
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
create table training_plan (
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
create table training_plan_type (
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
create user if not exists 'springuser' @'%' identified by 'ThePassword';
grant select,
    insert,
    delete,
    update on train_me.* to 'springuser' @'%';

INSERT INTO user(user_sysid,user_email,first_name,last_name,create_ts,update_ts) VALUES (0, 'robin.goetz@temple.edu', 'Robin', 'Goetz', SYSDATE(), SYSDATE());
INSERT INTO user(user_sysid,user_email,first_name,last_name,create_ts,update_ts) VALUES (0, 'test@train.me', 'Train', 'Me', SYSDATE(), SYSDATE());