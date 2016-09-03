import {
    check
} from 'meteor/check';
import {
    HTTP
} from 'meteor/http';

let emailhunter_config = Meteor.settings.private.emailhunter;

if (!emailhunter_config || !emailhunter_config.api_key) {

    console.log('Config your emailhunter settings.');
}

Meteor.methods({

    /*
     * Searches possible emails based on given domain
     * @params Accepts domain as string
     * Uses emailhunter
     */

    'domainSearch': function(domain) {

        check(domain, String);

        if (!emailhunter_config || !emailhunter_config.api_key) {

            return {
                success: false,
                reason: 'No emailhunter api_key found or you mispelled your settings.'
            };
        }

        try {
            let response = HTTP.get("https://api.emailhunter.co/v1/search", {
                params: {
                    "api_key": emailhunter_config.api_key,
                    "domain": domain
                }
            }).data;

            return {
                success: true,
                data: response
            };

        } catch (e) {
            return e;
        }

        return false;
    }
});
