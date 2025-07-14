/**
 * @description       : 
 * @author            : Souvik Sen
 * @group             : 
 * @last modified on  : 07-14-2025
 * @last modified by  : Souvik Sen
**/
public with sharing class ApproveStudentBatch implements Database.Batchable<SObject> {
    public ApproveStudentBatch(){}

    public Database.QueryLocator start(Database.BatchableContext bc){
     return Database.getQueryLocator(
        'SELECT Id, Status__c FROM Student__c WHERE Status__c= \' Pending \' '
     );
    }
    
    public void execute(Database.BatchableContext bc, List<Student__c> scope){
        for (Student__c stu : scope) {
            stu.Status__c = 'Approved';
        }
        if (!scope.isEmpty()) {
            update scope;
        }
    }

    public void finish(Database.BatchableContext bc) {
        System.debug('All students updated successfully!');
    }
}