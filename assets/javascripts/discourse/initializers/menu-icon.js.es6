import {decorateWidget} from 'discourse/widgets/widget';
import {h} from 'virtual-dom';
import {helper} from 'discourse/widgets/widget';

export default {
    name: 'menu-icon',
    initialize() {
        if (Discourse.SiteSettings.menu_icon_enabled) {
            decorateWidget('header-icons:before', helper => {
                const showExtraInfo = helper.attrs.minimized;
                if (!showExtraInfo) {
                    return h('li.header-dropdown-togglALv2e', [
                        h('a.icon.btn-flat', {
                                'id': Discourse.SiteSettings.menu_icon_id,
                                'href': Discourse.SiteSettings.menu_icon_url,
                                'title': Discourse.SiteSettings.menu_icon_title,
                                'aria-label': Discourse.SiteSettings.menu_icon_title,
                                '_target': ((Discourse.SiteSettings.menu_icon_new_window) ? "_blank" : "_self")
                            }, [
                                h('i.fa.' + Discourse.SiteSettings.menu_icon_icon + '.d-icon', {
                                    'aria-hidden': 'true'
                                })
                            ]
                        ),
                    ]);
                }
            });
        }
    }
};
