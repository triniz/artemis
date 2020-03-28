class UserMailer < ApplicationMailer
    default from: "contact@artemispharma.net"

    def contact_form(email, subject, name, message)
    @message = message
        mail(from: email,
            to: 'triki.nizar@gmail.com',
            subject: "Un nouveau message de #{name}")
    end
end
