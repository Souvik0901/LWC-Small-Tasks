/**
 * @description       : controller class used for displaying accounts records
 * @author            : Souvik Sen
 * @group             : LWC
 * @last modified on  : 07-16-2025
 * @last modified by  : Souvik Sen
**/
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}