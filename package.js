Package.describe({
  name: 'edionme:domain-searcher',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Searches emails associated by a domain',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/edionmelarosa/domain-search',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.use('http');
  api.use('email');
  api.mainModule('domain-searcher.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('http');
  api.use('edionme:domain-searcher');
  api.mainModule('domain-searcher-tests.js', 'server');
});
