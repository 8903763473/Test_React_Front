import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import '../../CommonModule/Notification/Notification.scss';
import { useNavigate } from 'react-router-dom';

const Notification = ({ id, type, title, subtitle, timeout, onClose, button, path }) => {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            handleDismiss();
        }, timeout);

        return () => clearTimeout(timer);
    }, [timeout]);

    const handleDismiss = () => {
        const notificationElement = document.getElementById(id);
        if (notificationElement) {
            notificationElement.style.animation = 'flyOut 0.3s forwards';
            setTimeout(() => {
                onClose(id);
            }, 300);
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return '✅';
            case 'error':
                return '❌';
            case 'warning':
                return '⚠️';
            default:
                return 'ℹ️';
        }
    };

    const navigateTo = (data) => {
        navigate('/' + data)
    }

    return (
        <div className={`notification notification--${type}`} id={id} style={{ animation: 'flyIn 0.3s forwards' }}>
            <div className="notification__icon">{getIcon()}</div>
            <div className="notification__text">
                <div className="notification__title">{title}</div>
                <div className="notification__subtitle">{subtitle}</div>
            </div>

            {button == 'x' && (
                <span className="notification__close-btn" onClick={handleDismiss}>x</span>
                // <button className="notification__close-btn" onClick={handleDismiss}>
                //     ×
                // </button>
            )}


            {button != 'x' && (
                <div className="notification__close-btn additionalButton">
                    <span className='okBtn' onClick={() => navigateTo(path)}>OK</span>
                    <span onClick={handleDismiss}>Cancel</span>
                </div>
            )}

        </div>
    );
};

const NotificationCenter = forwardRef((props, ref) => {
    const [notifications, setNotifications] = useState([]);

    const spawnNotification = (type, title, subtitle, button, path) => {
        const id = `note-${Math.random().toString(36).substr(2, 9)}`;
        const newNotification = { id, type, title, subtitle, timeout: 5000, button, path };
        setNotifications((prev) => [...prev, newNotification]);
    };

    const removeNotification = (id) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    useImperativeHandle(ref, () => ({
        spawnNotification
    }));

    return (
        <div id="notification-container">
            {notifications.map((notification) => (
                <Notification
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    title={notification.title}
                    subtitle={notification.subtitle}
                    timeout={notification.timeout}
                    onClose={removeNotification}
                    button={notification.button}
                    path={notification.path}
                />
            ))}
        </div>
    );
});

export default NotificationCenter;
