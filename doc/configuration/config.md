# Configuration options #

ezPAARSE comes with a `config.json` file (located at the root of the /ezpaarse directory) where some the configuration options for your instance can be set or modified.

### EZPAARSE_ADMIN_MAIL ###
The default value is set to `ezpaarse@couperin.org`

### EZPAARSE_PARENT_URL ###
To avoid the setup of a local SMTP server, you can delegate the management of user feedback (via the online form) to another ezPAARSE instance (called a "parent" instance).
The default value is set to `http://ezpaarse-preprod.couperin.org`

### EZPAARSE_FEEDBACK_RECIPIENTS ###
The mail adress where the users feedback get sent.
The default value is set to `ezpaarse@couperin.org`

### EZPAARSE_SUBSCRIPTION_MAIL ###
If you wish to receive a message everytime a user opens an account on your instance, set the value to `true`.
The default value is set to `false`

### EZPAARSE_MONGO_URL ###
The default value is set to `mongodb://localhost:27017/ezpaarse`

### EZPAARSE_ENV ###
The default value is set to `production`

### EZPAARSE_NODEJS_PORT ###
The default value is set to `59599`

### EZPAARSE_NODEJS_VERSION ###
The default value is set to `6.6.0`

### EZPAARSE_OUTPUT_FIELDS ###
Contains an array of field names that are going to be present in the result file produced by ezPAARSE.
The default array contains the following fields:
```json
[
"datetime",
"date",
"login",
"platform",
"platform_name",
"publisher_name",
"rtype",
"mime",
"print_identifier",
"online_identifier",
"title_id",
"doi",
"publication_title",
"unitid",
"domain"
]
```


### EZPAARSE_DEMO ###
If `true`, it shows a warning informing users that the instance is a demo, and thus not adapted to process large log files. This warning now appears on our demo instance hosted on [http://ezpaarse.couperin.org](http://ezpaarse.couperin.org)
The default value is set to `false`.

### EZPAARSE_MIDDLEWARES" ###
Contains an array of middleware names, in the order they are going to be launched by ezPAARSE during a process.
The default array contains the following middlewares:

```json
[
  "filter",
  "parser",
  "deduplicator",
  "enhancer",
  "istex",
  "crossref",
  "sudoc",
  "hal",
  "geolocalizer",
  "field-splitter",
  "qualifier",
  "cut",
  "anonymizer"
]
```
### EZPAARSE_QUALIFYING_LEVEL ###
This sets the minimal value, under which ezPAARSE considers an EC is not qualified enough to be written to the results.
The default value is set to `1`

### EZPAARSE_QUALIFYING_FACTORS ###
```json
{
    "internal": {
      "rtype": 0.5,
      "mime": 0.5
    },
    "external": [
      {
        "file": "platforms/fields.json",
        "sublist": "rid",
        "attribute": "code",
        "weight": 1
      }
    ]
  }
```

### EZPAARSE_TMP_CYCLE ###
Determines how long ezPAARSE results remain accessible for downloading.
The default value is set to `60min`

### EZPAARSE_TMP_LIFETIME ###
Sets the maximal duration for the storage of result files.
The default value is set to `1day`

### EZPAARSE_IGNORED_DOMAINS ###
Contains an array of domains to be ignored (ie filtered out) by ezPAARSE.
```json
[
  "www.google.fr",
  "www.google.com"
]
```

To avoid declaring too long a list, we advise you to declare unrelevant domains in dedicated exclusion files as documented in this [section](http://ezpaarse.readthedocs.io/en/master/features/exclusions.html#the-unrelevant-domains)

### EZPAARSE_GEOLOCALIZE_DEFAULT ###
The default value is set to `geoip-lookup`

### EZPAARSE_GEOLOCALIZE_SEPARATOR ###
The default value is set to `.` (dot)

### EZPAARSE_ALERTS ###
Contains an object with 2 member properties, listed here:
```json
{
  "activationThreshold": 1000,
  "unknownDomainsRate": 10
}
```
The properties and their values are documented in further details in the [relevant section](http://ezpaarse.readthedocs.io/en/master/features/alerts.html)
