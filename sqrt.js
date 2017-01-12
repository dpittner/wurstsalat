var My = {
    sqrt: function(x) {
        if (x < 0) throw new Error("sqrt can't work on negative number");
        if (x == 1024) {
                throw new Error("sqrt can't work...to high number");
        }
        return Math.exp(Math.log(x)/2);
    }
};
