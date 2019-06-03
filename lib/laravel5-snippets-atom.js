'use babel';

import Laravel5SnippetsAtomView from './laravel5-snippets-atom-view';
import { CompositeDisposable } from 'atom';

export default {

  laravel5SnippetsAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.laravel5SnippetsAtomView = new Laravel5SnippetsAtomView(state.laravel5SnippetsAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.laravel5SnippetsAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'laravel5-snippets-atom:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.laravel5SnippetsAtomView.destroy();
  },

  serialize() {
    return {
      laravel5SnippetsAtomViewState: this.laravel5SnippetsAtomView.serialize()
    };
  },

  toggle() {
    console.log('Laravel5SnippetsAtom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
