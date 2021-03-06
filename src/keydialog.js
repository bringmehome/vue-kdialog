/**
 * Created by keydone on 2017/05/01.
* */

import Vue from 'vue';
import KeyDialog from './keydialog.vue';

const KeyDialogConstructor = Vue.extend(KeyDialog);

const keyDialog = {
    runtime: 'pc',
    language: {
        default: 'zh-cn',
        'zh-cn': {
            ok: '确定',
            confirm: '确定',
            cancel: '取消'
        },
        en: {
            ok: 'OK',
            confirm: 'Confirm',
            cancel: 'Cancel'
        }
    },
    keyDialogId: 171200,
    init(options, type) {
        keyDialog.keyDialogId += 1;
        const KeyDialogInstance = new KeyDialogConstructor({
            data: options,
        }); // 实例化带有 options 内容的弹窗

        const id = `kDialog_${keyDialog.keyDialogId}`;
        KeyDialogInstance.id = id;
        KeyDialogInstance._type = type;                      // eslint-disable-line
        KeyDialogInstance._language = keyDialog.language;    // eslint-disable-line
        KeyDialogInstance._runtime = `runon_${keyDialog.runtime}`; // eslint-disable-line
        KeyDialogInstance.vm = KeyDialogInstance.$mount(); // 挂载但是并未插入dom，是个完整的Vue实例
        KeyDialogInstance.dom = KeyDialogInstance.vm.$el;
        document.body.appendChild(KeyDialogInstance.dom); // 将dom插入body
        KeyDialogInstance.dom.style.zIndex = keyDialog.keyDialogId;
        return KeyDialogInstance.vm;
    },
    confirm(options) {
        return keyDialog.init(options, 'confirm');
    },
    alert(options) {
        return keyDialog.init(options, 'alert');
    },
    toast(options) {
        return keyDialog.init(options, 'toast');
    },
    loading(options) {
        return keyDialog.init(options, 'loading');
    }
};

export default {
    install: () => {
        Vue.prototype.$toast = keyDialog.toast; // 将 keyDialog 组件挂载在Vue的原型上
        Vue.prototype.$alert = keyDialog.alert;
        Vue.prototype.$loading = keyDialog.loading;
        Vue.prototype.$confirm = keyDialog.confirm;
    },
    setRunTime(runtime) {
        keyDialog.runtime = runtime;
    },
    setLanguage(defaultLang) {
        keyDialog.language.default = defaultLang;
    },
    eventbus() {
        // 添加全局 event bus
        const EventBus = new Vue();

        Object.defineProperties(Vue.prototype, {
            $bus: {
                get() {
                    return EventBus;
                }
            },
        });
    },
};
