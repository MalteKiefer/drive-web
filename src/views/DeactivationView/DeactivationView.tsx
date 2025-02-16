import * as React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { isMobile } from 'react-device-detect';
import { toast } from 'react-toastify';

import { AppDispatch } from '../../store';
import { userThunks } from '../../store/slices/user';

import httpService from '../../services/http.service';
import notificationsService, { ToastType } from '../../services/notifications.service';

import { match } from 'react-router-dom';
import navigationService from '../../services/navigation.service';
import { AppView } from '../../models/enums';

interface DeactivationProps {
  match?: match<{ token: string }>;
  dispatch: AppDispatch;
}

class DeactivationView extends React.Component<DeactivationProps> {
  state = {
    token: this.props.match?.params.token || '',
    result: this.confirmDeactivation(),
    errorReason: '',
  };

  IsValidToken = (token: string) => {
    return /^[a-z0-9]{512}$/.test(token);
  };

  ClearAndRedirect = () => {
    this.props.dispatch(userThunks.logoutThunk());

    if (!isMobile) {
      notificationsService.show('Your account has been deactivated', ToastType.Info);
      navigationService.push(AppView.Login);
    } else {
      this.setState({ result: this.confirmDeactivation() });
    }
  };

  ConfirmDeactivateUser = (token: string) => {
    return httpService
      .get<void>('/api/confirmDeactivation/' + token)
      .then(() => {
        this.ClearAndRedirect();
      })
      .catch(() => {
        if (!isMobile) {
          toast.warn('Invalid token');
          navigationService.push(AppView.Login);
        } else {
          this.setState({ result: this.invalidDeactivationToken() });
        }
      });
  };

  componentDidMount(): void {
    if (this.IsValidToken(this.state.token)) {
      this.ConfirmDeactivateUser(this.state.token);
    } else {
      if (!isMobile) {
        toast.warn('Invalid token');
        navigationService.push(AppView.Login);
      } else {
        this.setState({ result: this.invalidDeactivationToken() });
      }
    }
  }

  render(): JSX.Element {
    if (!isMobile) {
      return <div></div>;
    } else {
      return (
        <Container>
          <Alert variant="danger">{this.state.result}</Alert>
        </Container>
      );
    }
  }

  confirmDeactivation(): JSX.Element {
    return <p>Your account has been deactivated</p>;
  }

  invalidDeactivationToken(): JSX.Element {
    return (
      <div>
        <p>Invalid token</p>
      </div>
    );
  }
}

export default connect()(DeactivationView);
