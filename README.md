This project demonstrate a custom page for account search on Salesforce platform. User can search Account, Update Contacts related to that Account and can delete any contact if needed.
You can add Apex code as below:


public with sharing class LWCAccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(string searchText){
        try {
            
            if(String.IsEmpty(searchText)){
                return [Select Id,Name FROM Account];
            }
            else{
                searchText='%'+searchText+'%';
                return [Select Id,Name FROM Account WHERE Name LIKE :searchText];
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    public static List<Contact> getAccountContacts(string accountId){
        try {
            return [SELECT Id,Name FROM Contact WHERE accountId=:accountId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
