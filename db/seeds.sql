DO $$
  DECLARE
      -- Any variable declarations would go here
  BEGIN
      -- Begin transaction

      insert into department(name) values
        ('accounting'),
        ('materials'),
        ('production'),
        ('HR');

      insert into role(title,salary,department) values
        ('payrole', 45000, 1),
        ('book-keeping', 65000, 1),
        ('taxes', 52000, 1),
        ('accounting-lead', 80000, 1),
        ('loading',44000, 2),
        ('unloading', 44000, 2),
        ('forklift', 35000, 2),
        ('materials-lead', 70000, 2),
        ('parts-cleaner', 30000,3),
        ('genaral-assembly', 33000,3),
        ('quality-inspection', 35000,3),
        ('production-lead', 30000,3),
        ('recruitment',50000,4),
        ('training',46000,4),
        ('performance',60000,4),
        ('HR-lead',85000,4);
    
    insert into employee(first_name,last_name, ,manager_id) values
        ('penelope','casey',4,null),
        ('haider','oneill',1,1),
        ('anita','wu',2,1),
        ('jannat','gallegos',3,1),
        ('zaki','king',8,null),
        ('juanita','ellis',5,5),
        ('alexis','marsh',6,5),
        ('lawson','hobs',7,5),
        ('anastasia','snow',12,null),
        ('layla','norris',9,9),
        ('joyce','guerrero',10,9),
        ('rachel','robinson',11,9),
        ('shania','weeks',16,null),
        ('jon','hoffman',13,13),
        ('aisha','pearson',14,13),
        ('conrad','Dennis',15,13);


    -- If the code reaches here, it means no exceptions were raised.
    -- Thus, it will commit automatically at the end of the block.
RAISE NOTICE 'Transaction complete';

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'An error occurred: %', SQLERRM; -- Log the error
        ROLLBACK; -- Explicitly roll back changes in case of error
END $$;