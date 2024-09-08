const CHANGED_CLASS_NAME = 'header-transition';

const INIT_STATE = 'init';
const CHANGED_STATE = 'changed';

class Header {
    constructor(el, critical_poilt, scrollContainer, eventEl = scrollContainer) {
        // 需要进行操作class的元素
        this.el = el;
        // 滚动条的关键点
        this.critical_poilt = critical_poilt;
        // 滚动条所在的容器
        this.scrollContainer = scrollContainer;
        // 监听滚动事件的元素
        this.eventEl = eventEl;

        this.setState(INIT_STATE);

        this.bindEvent();
    }

    // 设置状态
    setState(state) {
        return this.state = state;
    }

    // 绑定函数
    bindEvent() {
        this.eventEl.addEventListener('scroll', () => {
            if (this.needAddClassName()) {
                this.setState(CHANGED_STATE);
                this.addClassName();
            } else if (this.needRemoveClassName()) {
                this.setState(INIT_STATE);
                this.removeClassName();
            }
        }, false)
    }

    // 判断需要添加类名
    needAddClassName() {
        return (
            this.state !== CHANGED_STATE && this.scrollContainer.scrollTop > this.critical_poilt
        );
    }

    //添加类名
    addClassName() {
        return (
            this.el.classList.add(CHANGED_CLASS_NAME)
        );
    }

    // 判断需要移出类名或者不改变
    needRemoveClassName() {
        return (
            this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.critical_poilt
        );
    }

    //移出类名
    removeClassName() {
        return (
            this.el.classList.remove(CHANGED_CLASS_NAME)
        );
    }

}

export default Header;
