use blog;
INSERT INTO posts (title, body)
VALUES (
        "Blog Post 1",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    (
        "Blog Post 2",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc vel risus commodo viverra maecenas. Dui sapien eget mi proin sed. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et."
    ),
    (
        "Blog Post 3",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis varius quam. Donec ultrices tincidunt arcu non sodales. Eget mi proin sed libero. Sagittis eu volutpat odio facilisis mauris sit amet."
    );
INSERT INTO comments (comment, post_id, parent_comment_id)
VALUES ("Blog Post 1 Looks cool", 1, NULL),
    ("I agree it's cool", 1, 1),
    ("Blog Post 1 is in psudo latin right?", 1, NULL),
    ("Yeah?", 1, 3),
    ("Yeah", 1, 4),
    (
        "Blog Post 2 is a lot like the first blog post",
        2,
        NULL
    );