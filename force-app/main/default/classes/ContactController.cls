/**
 * @description       : controller class used for displaying contact list
 * @author            : Souvik Sen
 * @group             : LWC
 * @last modified on  : 07-16-2025
 * @last modified by  : Souvik Sen
**/
public with sharing class ContactController {
 @AuraEnabled(cacheable=true)
 public static List<Contact> getContacts(){
  //  return [
  //     SELECT FirstName, LastName, Email
  //     FROM Contact
  //     WITH SECURITY_ENFORCED
  //     ORDER BY FirstName
  //  ];
   throw new AuraHandledException('Forced error');
 }
}