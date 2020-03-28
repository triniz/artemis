class StaticController < ApplicationController
    def index
    end
    def thankyou
        @name = params[:name]
        @email = params[:email]
        @subject = params[:subject]
        @message = params[:message]
        UserMailer.contact_form(@email, @subject, @name, @message).deliver_now
    end
end
