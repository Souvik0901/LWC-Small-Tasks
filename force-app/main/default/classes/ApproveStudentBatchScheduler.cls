/**
 * @description       : 
 * @author            : Souvik Sen
 * @group             : 
 * @last modified on  : 07-14-2025
 * @last modified by  : Souvik Sen
**/
public with sharing class ApproveStudentBatchScheduler implements Schedulable {

    public void execute(SchedulableContext sc) {
        Database.executeBatch(new ApproveStudentBatch(), 200);
    }
}
