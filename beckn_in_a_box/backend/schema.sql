CREATE DATABASE users;
USE users;

CREATE TABLE user_table(
    id integer PRIMARY KEY AUTO_INCREMENT,
    project VARCHAR(255) NOT NULL,
    project_type TEXT NOT NULL,
    project_role TEXT NOT NULL,
    organization_name TEXT NOT NULL,
    manage BOOLEAN NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO user_table (project, project_type, project_role, organization_name, manage)
VALUES
('FirstProject', 'SDK', 'BAP', 'ONDC', 1, NOW()),
('SecondProject', 'User Application', 'BAP', 'ONDC', 0, NOW());
