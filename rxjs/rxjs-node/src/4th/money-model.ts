const Money = function(current, value) {

    return {
        value: function() {
            return value;
        },
        currency: function() {
            return current;
        },
        toString: function() {

            return `${current}-${value}`;
        }
    };
};
