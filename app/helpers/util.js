import browserStorage from './browserStorage';
import { MAIN_CONTENT_BLOCK, FREEZE_UI_CLASS } from '../constants';

class Util {
    isUserLogged() {
        const isLogged = browserStorage.getLocalStorage('sc_data');

        return isLogged || false;
    }

    blockUi(selector = MAIN_CONTENT_BLOCK) {
        document.getElementById(selector).classList.add(FREEZE_UI_CLASS);
    }

    unblockUi(selector = MAIN_CONTENT_BLOCK) {
        document.getElementById(selector).classList.remove(FREEZE_UI_CLASS);
    }
}

export default new Util();
