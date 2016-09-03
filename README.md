# Domain Search Package

 This package will search emails associated by a domain. Uses [emailhunter api](https://emailhunter.co/).

# How to use

* Set your emailhunter api ([get here](https://emailhunter.co/)):

  ```
  {
    "private": {
        "emailhunter": {
            "api_key": "youremailhunterkey"
        }
    }

  }
  ```
* Call domainSearch() method:
  ```
  Meteor.call("domainSearch", domain, function(error, result) {

      // Error here
      if (error) {
          console.log("error", error);
      }
      if (result && result.success) {

          // emails is on result.data.emails object


      }

      return false;
  });
  ```

## Run your app
```
meteor run --settings /path/to/yoursettingsfile/
```
