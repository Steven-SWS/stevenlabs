SELECT datetime('now', 'localtime', '-1 year');

UPDATE blog_posts SET
create_dt = datetime('now', 'localtime', '-1 month', '-1 year'),
modify_dt = datetime('now', 'localtime', '-1 month', '-1 year'),
WHERE id = 2;
