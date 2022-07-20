export class Dashboard {
  getDashboardTitle() {
    return cy.get('h6');
  }

  // Get the video iframe
  getVideoIFrame() {
    const getIframeDocument = () => {
      return (
        cy
          .get('iframe[src*="share.getcloudapp.com"]')
          .its('0.contentDocument')
          .should('exist')
      );
    };

    return (
      getIframeDocument()
        .its('body')
        .should('not.be.undefined')
        .then(cy.wrap)
    );
  }

  // Get the video thumbnail element
  getVideoThumbnail() {
    return this.getVideoIFrame().find('#video-item_html5_api');
  }

  getDownloadAppButton() {
    return cy.get('a[data-testid="no-drops-downloads"] span')
  }
}