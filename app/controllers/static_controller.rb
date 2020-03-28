class StaticController < ApplicationController
    def index
    end
    def thankyou
        @name = params[:name]
        @email = params[:email]
        @subject = params[:subject]
        @message = params[:message]
        ActionMailer::Base.mail(from: @email,
        to: 'triki.nizar@gmail.com',
        subject: "Artemispharma.net: un nouveau message de #{@name}",
        body: "#{@subject}<br>#{@message}").deliver_now
    end
end
