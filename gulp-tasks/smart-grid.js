"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "30px", // gutter width - 30px
        mobileFirst: false,
        mixinNames: {
            container: "container",
            reset: "reset"
        },
        container: {
            fields: "60px",
            maxWidth: "1300px !important"
        },
        breakPoints: {
            xs: {
                width: "320px"
            },
            sm: {
                width: "576px",
                fields: "15px"
            },
            md: {
                width: "768px",
                fields: "15px"
            },
            lg: {
                width: "1300px",
                fields: "60px"
            },
        }
    });
    cb();
});
