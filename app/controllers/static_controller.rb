class StaticController < ApplicationController
    def index
    end
    def thankyou
        @name = params[:name]
        @email = params[:email]
        @subject = params[:subject]
        @message = params[:message]
        ActionMailer::Base.mail(from: 'contact@artemispharma.net',
                                to: 'triki.nizar@gmail.com',
                                subject: "un nouveau message de #{@name}",
                                body: "#{@subsject}<br>#{@message}").deliver_now
    end
end
