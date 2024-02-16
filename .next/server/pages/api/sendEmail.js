"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendEmail";
exports.ids = ["pages/api/sendEmail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/sendEmail.js":
/*!********************************!*\
  !*** ./pages/api/sendEmail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { name , email , subject , message  } = req.body;\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            service: \"gmail\",\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASSWORD\n            }\n        });\n        const mailOptions = {\n            from: '\"Portfolio Razvan Pana\" <razvanpana29@gmail.com>',\n            to: process.env.EMAIL_USER,\n            subject: `New Contact from ${name}: ${subject}`,\n            text: message,\n            html: `<p>You have a new contact form submission:</p><br>\n             <p><strong>Name:</strong> ${name}</p>\n             <p><strong>Email:</strong> ${email}</p>\n             <p><strong>Subject:</strong> ${subject}</p>\n             <p><strong>Message:</strong> ${message}</p>`\n        };\n        try {\n            await transporter.sendMail(mailOptions);\n            res.status(200).send(\"Email sent successfully\");\n        } catch (error) {\n            console.log(error);\n            res.status(500).send(\"Error sending email\");\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUVwQyxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFLEdBQUdOLElBQUlPLElBQUk7UUFFbEQsTUFBTUMsY0FBY1QsaUVBQTBCLENBQUM7WUFDN0NXLFNBQVM7WUFDVEMsTUFBTTtnQkFDSkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO2dCQUM1QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxjQUFjO1lBQ2xDO1FBQ0Y7UUFFQSxNQUFNQyxjQUFjO1lBQ2xCQyxNQUFNO1lBQ05DLElBQUlQLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUMxQlYsU0FBUyxDQUFDLGlCQUFpQixFQUFFRixLQUFLLEVBQUUsRUFBRUUsUUFBUSxDQUFDO1lBQy9DZ0IsTUFBTWY7WUFDTmdCLE1BQU0sQ0FBQzt1Q0FDMEIsRUFBRW5CLEtBQUs7d0NBQ04sRUFBRUMsTUFBTTswQ0FDTixFQUFFQyxRQUFROzBDQUNWLEVBQUVDLFFBQVEsSUFBSSxDQUFDO1FBQ3JEO1FBRUEsSUFBSTtZQUNGLE1BQU1FLFlBQVllLFFBQVEsQ0FBQ0w7WUFDM0JqQixJQUFJdUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUN2QixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaekIsSUFBSXVCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDdkI7SUFDRixPQUFPO1FBQ0x4QixJQUFJNEIsU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CNUIsSUFBSXVCLE1BQU0sQ0FBQyxLQUFLTSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUU5QixJQUFJRSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hELENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNwb3J0Zm9saW8vLi9wYWdlcy9hcGkvc2VuZEVtYWlsLmpzPzIwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIHNlcnZpY2U6ICdnbWFpbCcsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1NXT1JELFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG1haWxPcHRpb25zID0ge1xuICAgICAgZnJvbTogJ1wiUG9ydGZvbGlvIFJhenZhbiBQYW5hXCIgPHJhenZhbnBhbmEyOUBnbWFpbC5jb20+JyxcbiAgICAgIHRvOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgICAgc3ViamVjdDogYE5ldyBDb250YWN0IGZyb20gJHtuYW1lfTogJHtzdWJqZWN0fWAsXG4gICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgICAgaHRtbDogYDxwPllvdSBoYXZlIGEgbmV3IGNvbnRhY3QgZm9ybSBzdWJtaXNzaW9uOjwvcD48YnI+XG4gICAgICAgICAgICAgPHA+PHN0cm9uZz5OYW1lOjwvc3Ryb25nPiAke25hbWV9PC9wPlxuICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+ICR7ZW1haWx9PC9wPlxuICAgICAgICAgICAgIDxwPjxzdHJvbmc+U3ViamVjdDo8L3N0cm9uZz4gJHtzdWJqZWN0fTwvcD5cbiAgICAgICAgICAgICA8cD48c3Ryb25nPk1lc3NhZ2U6PC9zdHJvbmc+ICR7bWVzc2FnZX08L3A+YCxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnRXJyb3Igc2VuZGluZyBlbWFpbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsImJvZHkiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwicGFzcyIsIkVNQUlMX1BBU1NXT1JEIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJ0ZXh0IiwiaHRtbCIsInNlbmRNYWlsIiwic3RhdHVzIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/sendEmail.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/sendEmail.js"));
module.exports = __webpack_exports__;

})();