// define type of erreur

const errors = {
    FORBIDDEN: {type: 'FORBIDDEN', message: 'Erreur : vous n\'avez pas acces', status: 403},
    FORBIDDEN_RIGHTS: {type: 'FORBIDDEN_RIGHTS', message: 'Erreur : vous n\'avez pas les droits', status: 403},
    NOT_ADMIN: {type: 'FORBIDDEN_ADMIN', message: 'Erreur : vous n\'avez pas les droits adminstrateur', status: 403},
    MISSING_PARAMETER: {type: 'MISSING_PARAMETER', message: 'Un ou plusieurs paramètres sont manquants', status: 400},
    INVALID_FORM_MAIL: {type: 'INVALID_FORM_MAIL', message: 'Format du mail invalide', status: 400},
    VALIDATION_REQUIRED: {type: 'VALIDATION_REQUIRED', message: 'Ce compte n\'a pas été activé, consultez vos mails et cliquez sur le lien de validation', status: 403},
    WRONG_IDENTIFIER: {type: 'WRONG_IDENTIFIER', message: 'Mail et/ou mot de passe invalide', status: 401},
    MEMBER_NOT_FOUND: {type: 'MEMBER_NOT_FOUND', message: 'Membre introuvable', status: 404},
    NOT_FOUND: {type: 'NOT_FOUND', message: 'Ressource introuvable', status: 404},
    INTERNAL_ERROR: {type: 'INTERNAL_ERROR', message: 'Le serveur a rencontrer une erreur', status: 500},
    customError: function (errorMessage, type, status) {
        return {
            type: type || 'INTERNAL_ERROR',
            message: errorMessage,
            status: status || 500
        }
    }
}

module.exports = errors