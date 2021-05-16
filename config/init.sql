-- RESET ON RESTART SINCE ITS ONLY A DEMO
DROP DATABASE IF EXISTS train_me;
CREATE DATABASE train_me;
USE train_me;

------------------------------------------------------------
-- SET UP DATA MODEL
------------------------------------------------------------


-- BASIC USER USED FOR AUTH, IDENTIFICATION ----------------
create table usr (
    user_sysid int not null auto_increment,
    user_email varchar(100) unique,
    user_password binary(60) not null,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    active char(1) default 'Y',
    create_ts date,
    update_ts date,
    primary key (user_sysid)
);

-- LETS DEFINE SOME REUSABLE BLUE PRINTS WHICH WE CAN USE --
-- TO PLAN OUR WORKOUT ROUTINE -----------------------------

-- SMALLEST UNIT, SINGLE EXERCISE (e.g. 4 x 10 pushups)
create table exercise (
    exercise_sysid int not null auto_increment,
    exercise_name varchar(100) not null,
    exercise_description varchar(1000),
    create_ts date,
    create_user_sysid int not null,
    update_ts date,
    update_user_sysid int not null,
    primary key (exercise_sysid),
    foreign key (create_user_sysid) references usr(user_sysid),
    foreign key (update_user_sysid) references usr(user_sysid),
    constraint uc_exercise unique (exercise_name,create_user_sysid)
);
-- A NUMBER OF EXERCISES GROUPED INTO ONE LOGICAL SESSION (e.g. Back/Shoulder Routine with 5 exercises)
create table training_session (
    training_session_sysid int not null auto_increment,
    training_session_name varchar(100) not null,
    training_session_description varchar(1000),
    create_ts date,
    create_user_sysid int not null,
    update_ts date,
    update_user_sysid int not null,
    primary key (training_session_sysid),
    foreign key (create_user_sysid) references usr(user_sysid),
    foreign key (update_user_sysid) references usr(user_sysid),
    constraint uc_session unique (training_session_name,create_user_sysid)
);
-- A GROUPING OF SESSIONS THAT FOLLOWS A SPECIFIC CADENCE 
create table training_plan (
    training_plan_sysid int not null auto_increment,
    training_plan_name varchar(100) not null,
    training_plan_description varchar(1000),
    create_ts date,
    create_user_sysid int not null,
    update_ts date,
    update_user_sysid int not null,
    primary key (training_plan_sysid),
    foreign key (create_user_sysid) references usr(user_sysid),
    foreign key (update_user_sysid) references usr(user_sysid)
);
-- WIP (WEEKLY, MONTHLY, QUARTERLY, ONE TIME)
create table training_plan_type (
    training_plan_type_sysid int not null auto_increment,
    training_plan_type_name varchar(100) not null,
    training_plan_type_description varchar(1000),
    create_ts date,
    create_user_sysid int not null,
    update_ts date,
    update_user_sysid int not null,
    primary key (training_plan_type_sysid),
    foreign key (create_user_sysid) references usr(user_sysid),
    foreign key (update_user_sysid) references usr(user_sysid)
);
-- EACH TRAINING SESSION IS MADE UP OF MULTIPLE EXERCISES
-- EXERCISES CAN BE USED BY MULTIPLE TRAINING SESSIONS
create table exercise_training_session (
    exercise_sysid int not null,
    training_session_sysid int not null,
    foreign key (exercise_sysid) references exercise(exercise_sysid),
    foreign key (training_session_sysid) references training_session(training_session_sysid)
);
-- EACH TRAINING PLAN IS MADE UP OF MULTIPLE TRAINING SESSIONS
-- TRAINING SESSIONS CAN BE ON MULTIPLE TRAINING PLANS
create table training_session_training_plan (
    training_session_sysid int not null,
    training_plan_sysid int not null,
    foreign key (training_session_sysid) references training_session(training_session_sysid),
    foreign key (training_plan_sysid) references training_plan(training_plan_sysid)
);

-- NOW LETS ACTUALLY RECORD OUR ACTIVITY--------------------

-- RECORING OF A SINGLE SESSION, WHICH HAS MULTIPLE EXERCISE RECORDS
create table training_session_record (
    training_session_record_sysid int not null auto_increment,
    recorded_by_user_sysid int not null,    
    create_ts date,
    primary key (training_session_record_sysid),
    foreign key (recorded_by_user_sysid) references usr(user_sysid)
);

-- RECORING OF A SINGLE EXERCISE, WHICH BELONG TO A SINGLE SESSION RECORD
create table exercise_record (
    exercise_record_sysid int not null auto_increment,
    exercise_sysid int not null,
    training_session_record_sysid int not null,
    recorded_by_user_sysid int not null,    
    create_ts date,
    primary key (exercise_record_sysid),
    foreign key (exercise_sysid) references exercise(exercise_sysid),
    foreign key (training_session_record_sysid) references training_session_record(training_session_record_sysid),
    foreign key (recorded_by_user_sysid) references usr(user_sysid)
);

------------------------------------------------------------
-- END SET UP
------------------------------------------------------------

-- CREATE APPLICATION USER
create user if not exists 'springuser' @'%' identified by 'ThePassword';
grant select,
    insert,
    delete,
    update on train_me.* to 'springuser' @'%';


-- INSERT TEST DATA
INSERT INTO usr(
        user_sysid,
        user_email,
        user_password,
        first_name,
        last_name,
        active,
        create_ts,
        update_ts
    )
VALUES (
        1,
        'test@train.me',
        '$2a$10$vX90q3EHkHRdkRox/gUwJuvftzw/fsJO0Uu/LXeZlx0pQ6Zupwloi',
        'Train',
        'Me',
        'Y',
        SYSDATE(),
        SYSDATE()
    );

INSERT INTO usr(
        user_sysid,
        user_email,
        user_password,
        first_name,
        last_name,
        active,
        create_ts,
        update_ts
    )
VALUES (
        2,
        'robin@train.me',
        '$2a$10$vX90q3EHkHRdkRox/gUwJuvftzw/fsJO0Uu/LXeZlx0pQ6Zupwloi',
        'Robin',
        'Goetz',
        'Y',
        SYSDATE(),
        SYSDATE()
    );