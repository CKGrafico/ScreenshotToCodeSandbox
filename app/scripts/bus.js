import EventBus from 'js-event-bus';

export const bus = new EventBus();

export const BusEvent = {
  ShowLoading: 'ShowLoading',
  HideLoading: 'HideLoading',
  ShowResults: 'ShowResults',
  HideResults: 'HideResults',
  FileAdded: 'FileAdded',
  ImageProcessed: 'ImageProcessed',
  LinkGenerated: 'LinkGenerated'
};
