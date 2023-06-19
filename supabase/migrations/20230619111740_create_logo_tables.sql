CREATE TABLE uploaded_images
(
    id            VARCHAR(26) PRIMARY KEY,
    user_id       VARCHAR(26) NOT NULL REFERENCES users(id),
    file_name     VARCHAR(255) NOT NULL,
    file_path     VARCHAR(255) NOT NULL,
    created_at    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at    TIMESTAMP WITH TIME ZONE
);

CREATE TABLE logo_detections
(
    id                 VARCHAR(26) PRIMARY KEY,
    uploaded_image_id  VARCHAR(26) NOT NULL REFERENCES uploaded_images(id),
    description        VARCHAR(255) NOT NULL,
    score              FLOAT NOT NULL,
    created_at         TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at         TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at         TIMESTAMP WITH TIME ZONE
);
