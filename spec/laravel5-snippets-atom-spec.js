'use babel';

import Laravel5SnippetsAtom from '../lib/laravel5-snippets-atom';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Laravel5SnippetsAtom', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('laravel5-snippets-atom');
  });

  describe('when the laravel5-snippets-atom:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.laravel5-snippets-atom')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'laravel5-snippets-atom:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.laravel5-snippets-atom')).toExist();

        let laravel5SnippetsAtomElement = workspaceElement.querySelector('.laravel5-snippets-atom');
        expect(laravel5SnippetsAtomElement).toExist();

        let laravel5SnippetsAtomPanel = atom.workspace.panelForItem(laravel5SnippetsAtomElement);
        expect(laravel5SnippetsAtomPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'laravel5-snippets-atom:toggle');
        expect(laravel5SnippetsAtomPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.laravel5-snippets-atom')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'laravel5-snippets-atom:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let laravel5SnippetsAtomElement = workspaceElement.querySelector('.laravel5-snippets-atom');
        expect(laravel5SnippetsAtomElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'laravel5-snippets-atom:toggle');
        expect(laravel5SnippetsAtomElement).not.toBeVisible();
      });
    });
  });
});
