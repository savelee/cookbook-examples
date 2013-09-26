Ext.define('Utils.Commons', {
    statics: {
        YELP_API: 'http://api.yelp.com/business_review_search?',
        YELP_KEY: 'ftPpQUCgfSA3yV98-uJn9g',
        YELP_TERM: 'Taxi',
        LOCATION: 'Amsterdam NL',

        getUrl: function() {
            return this.YELP_API + "term=" + this.YELP_TERM + "&ywsid=" + this.YELP_KEY + "&location=" + this.LOCATION;
        },
        initSenchaMods: function(){
            this.supersync();
        },
        supersync: function() {
            Ext.data.Store.prototype.supersync = function(callback) {
                //<1>
                this.on('write', callback, this, {
                    //<2>
                    single: true
                });

                //<3>
                var result = this.sync();

                //<4>
                if (result.added.length === 0 &&
                    result.updated.length === 0 &&
                    result.removed.length === 0) {
                    this.removeListener('write', callback, this, {
                        single: true
                    });
                    //<5>
                    var records = this.getData().items;
                    callback(records);
                }

                return result;
            };
        }
    }
});
