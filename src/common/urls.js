define(function () {
    let domain = 'http://114.55.92.124:9090';
    let root = domain + '/bmwos'
    return {
        get_user_info: root + '/user/get_user_info.do',
        create_report: root + '/audit_star/create_report.do'
    }
});
